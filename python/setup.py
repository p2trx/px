from setuptools import setup, find_packages
from setuptools.command.install import install
from px_client.client import Client

required_pkgs = ['grpcio>=1.27.2', 'grpcio-tools>=1.27.2']

class CustomInstall(install):
    def run(self):
        install.run(self)
        Client()

setup(
    name='ckpx',
    version='0.0.10',
    packages=find_packages(),
    setup_requires=required_pkgs,
    install_requires=required_pkgs,
    author='p2trx',
    description='px',
    url='https://github.com/p2trx/px',
    # include_package_data=True,
    # package_data={
    #     'package': ['px_server/package/**/*'],
    # },
    cmdclass={'install': CustomInstall},
)
