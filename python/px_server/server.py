import os, stat, errno, subprocess, socket, platform
import logging
import time
from px_server.helper import download_and_extract_px_server_package

logging.getLogger().setLevel(logging.INFO)

class Server:

    port = None

    process = None

    px_server_executable_file_path = None

    def __init__(self):
        self.setup()
        self.start()

    def __del__(self):
        self.stop()

    def setup(self):
        self.px_server_executable_file_path = download_and_extract_px_server_package()

    def start(self):
        logging.info('Starting px server...')

        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(("",0))
        self.port = s.getsockname()[1]
        self.process = subprocess.Popen([self.px_server_executable_file_path, str(self.port)])
        time.sleep(1)

    def stop(self):
        logging.info('Stopping px server...')

        if self.process is not None:
            self.process.terminate()
            logging.info('Server process id {}'.format(self.process.pid))
