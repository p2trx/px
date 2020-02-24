from setuptools import setup, find_packages

setup(
    name='px',
    version='0.0.1',
    packages=find_packages(),
    install_requires=['grpcio', 'grpcio-tools'],
    author='p2trx',
    description='Modern test automation framework using GRPC protocol',
    url='https://github.com/p2trx/px',
)
