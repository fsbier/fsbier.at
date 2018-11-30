<?php
namespace Deployer;

require 'recipe/drupal8.php';
require 'recipe/yarn.php';

// Project name
set('application', 'fsbier.at');

// Project repository
set('repository', 'https://github.com/fsbier/fsbier.at.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
set('shared_files', [
    'web/sites/default/settings.php',
    'web/sites/default/services.yml'
]);
set('shared_dirs', [
    'web/sites/default/files'
]);

// Writable dirs by web server
add('writable_dirs', [
    'web/sites/default/files'
]);


// Hosts

host('167.99.133.84')
    ->user('root')
    ->forwardAgent(true)
    ->multiplexing(true)
    ->set('branch', 'master')
    ->set('deploy_path', '/var/www');

// Tasks

task('build', function () {
    run('cd {{release_path}} && yarn build');
});

task('deploy:configimport', function () {
    run('cd {{release_path}} && vendor/bin/drush cim -y');
});

task('deploy:cachereset', function () {
    run('cd {{release_path}} && vendor/bin/drush cr');
});

task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:vendors',
    'yarn:install',
    'deploy:writable',
    'build',
    // 'deploy:configimport',
    'deploy:cachereset',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup'
]);

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
