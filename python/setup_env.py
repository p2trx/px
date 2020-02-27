import conda.cli as cli

cli.main('conda', 'create',  '-n', 'px', '-y', 'python=3.7')
cli.main('conda', 'install', '--file', 'requirements.txt', '-n', 'px', '-y')
