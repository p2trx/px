package c.k.px.server;

import java.io.IOException;
import java.net.ServerSocket;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import c.k.px.helper.PackageHelper;

public class Server {

  private static final Logger logger = Logger.getLogger(Server.class.getName());

  private String pxServerExecutableFilePath;

  private Integer port;

  private Process process;

  public Server() {
    try {
      setup();
      start();
    } catch (IOException e) {
      throw new RuntimeException("Cannot start PX server", e);
    }
  }

  public void setup() throws IOException {
    this.pxServerExecutableFilePath = PackageHelper.downloadAndExtractPXServerPackage(null, null, null);
  }

  public void start() throws IOException {
    this.port = this.getAvailablePort();
    process = new ProcessBuilder(pxServerExecutableFilePath, "--port", port.toString()).start();

    try {
      TimeUnit.SECONDS.sleep(1);
    } catch (Exception e) {
      // ignored
    }
  }

  public int getAvailablePort() throws IOException {
    try(ServerSocket s = new ServerSocket(0)) {
      return s.getLocalPort();
    }
  }

  public void stop() {
    if (process != null) {
      process.destroy();
    }
  }

//  public void printLog() {
//    try {
//      TimeUnit.SECONDS.sleep(5);
//      InputStream is = process.getInputStream();
//      InputStreamReader isr = new InputStreamReader(is);
//      BufferedReader br = new BufferedReader(isr);
//      String line;
//
//      while ((line = br.readLine()) != null) {
//        System.out.println(line);
//      }
//    } catch (Exception e) {
//      // ignored
//    }
//  }

  public Integer getPort() {
    return port;
  }
}
