from setuptools import setup, find_packages
from setuptools.command.install import install
import px_server.server as server

class CustomInstall(install):
    def run(self):
        server.download_and_extract_px_server_package()
        install.run(self)

setup(
    name='ckpx',
    version='0.0.5',
    packages=find_packages(),
    install_requires=['grpcio>=1.27.2', 'grpcio-tools>=1.27.2'],
    author='p2trx',
    description='px',
    url='https://github.com/p2trx/px',
    # include_package_data=True,
    # package_data={
    #     'package': ['px_server/package/**/*'],
    # },
    # cmdclass={'install': CustomInstall},
)
