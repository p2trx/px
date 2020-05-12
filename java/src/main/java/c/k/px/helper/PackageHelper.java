package c.k.px.helper;

import java.io.File;
import java.io.IOException;
import java.util.logging.Logger;

import c.k.px.helper.SystemHelper.OS;

public class PackageHelper {

  private static final Logger logger = Logger.getLogger(PackageHelper.class.getName());

  private static final String PX_SERVER_PACKAGE_DOWNLOAD_ROOT_URL = "https://ckpx.s3.amazonaws.com/px-server";

  private static final String WINDOWS_PX_SERVER_PACKAGE_DOWNLOAD_URL_TEMPLATE = PX_SERVER_PACKAGE_DOWNLOAD_ROOT_URL + "/%s/px-windows.zip";

  private static final String MAC_PX_SERVER_PACKAGE_DOWNLOAD_URL_TEMPLATE = PX_SERVER_PACKAGE_DOWNLOAD_ROOT_URL + "/%s/px-mac.zip";

  private static final String LINUX_PX_SERVER_PACKAGE_DOWNLOAD_URL_TEMPLATE = PX_SERVER_PACKAGE_DOWNLOAD_ROOT_URL + "/%s/px-linux.zip";

  private static final String PX_HOME_DIR = System.getProperty("user.home") + File.separator + ".px";

  private static final String DEFAULT_PX_SERVER_PACKAGE_PATH = PX_HOME_DIR + File.separator + "px-server";

  private static final OS DEFAULT_OS = SystemHelper.getOS();

  private static final String DEFAULT_PS_SEVER_VERSION = "0.0.1";

  public static String downloadAndExtractPXServerPackage(OS os, String version, String pxServerPackagePath) throws IOException {
    if (os == null) {
      os = DEFAULT_OS;
    }

    if (version == null) {
      version = DEFAULT_PS_SEVER_VERSION;
    }

    if (pxServerPackagePath == null) {
      pxServerPackagePath = DEFAULT_PX_SERVER_PACKAGE_PATH;
    }
    pxServerPackagePath = pxServerPackagePath + File.separator + String.format("%s-%s", os.getName(), version);

    String pxServerExecutableFileName;
    if (os == OS.WINDOWS) {
      pxServerExecutableFileName = "px.exe";
    } else {
      pxServerExecutableFileName = "px";
    }

    String pxServerExecutableFilePath = pxServerPackagePath + File.separator + pxServerExecutableFileName;
    String grpcFilePath = pxServerPackagePath + File.separator + "grpc_node.node";

    File pxServerExecutableFile = new File(pxServerExecutableFilePath);
    File grpcFile = new File(grpcFilePath);

    if (!pxServerExecutableFile.exists() || !grpcFile.exists()) {
      pxServerExecutableFile.delete();
      grpcFile.delete();

      String pxServerPackageDownloadUrl = getPXServerPackageDownloadUrl(os, version);

      logger.info("Download px server package from " + pxServerPackageDownloadUrl);
      File zipFile = FileHelper.download(pxServerPackageDownloadUrl);

      logger.info(String.format("Extracting px server package from %s to %s",
          zipFile.getAbsoluteFile(), pxServerPackagePath));
      FileHelper.extract(zipFile, pxServerPackagePath);
    }

    pxServerExecutableFile.setExecutable(true);
    pxServerExecutableFile.setReadable(true);
    pxServerExecutableFile.setWritable(true);

    grpcFile.setExecutable(true);
    grpcFile.setReadable(true);
    grpcFile.setWritable(true);

    return pxServerExecutableFilePath;
  }

  public static String getPXServerPackageDownloadUrl(OS os, String version) {
    if (os == null) {
      os = DEFAULT_OS;
    }

    if (version == null) {
      version = DEFAULT_PS_SEVER_VERSION;
    }

    String pxServerPackageDownloadUrlTemplate;
    switch (os) {
      case MAC:
        pxServerPackageDownloadUrlTemplate = MAC_PX_SERVER_PACKAGE_DOWNLOAD_URL_TEMPLATE;
        break;
      case LINUX:
        pxServerPackageDownloadUrlTemplate = LINUX_PX_SERVER_PACKAGE_DOWNLOAD_URL_TEMPLATE;
        break;
      case WINDOWS:
        pxServerPackageDownloadUrlTemplate = WINDOWS_PX_SERVER_PACKAGE_DOWNLOAD_URL_TEMPLATE;
        break;
      default:
        throw new RuntimeException("Unsupported OS: " + os);
    }

    return String.format(pxServerPackageDownloadUrlTemplate, version);
  }
}
