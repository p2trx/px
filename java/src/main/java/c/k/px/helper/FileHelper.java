package c.k.px.helper;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;
import java.nio.file.Files;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

public class FileHelper {

  public static File download(String url) throws IOException {
    ReadableByteChannel readableByteChannel = Channels.newChannel(new URL(url).openStream());
    File zipFile = Files.createTempFile("", "").toFile();
    zipFile.deleteOnExit();
    FileOutputStream fileOutputStream = new FileOutputStream(zipFile);
    fileOutputStream.getChannel().transferFrom(readableByteChannel, 0, Long.MAX_VALUE);
    return zipFile;
  }

  public static void extract(File zipFile, String destDirPath) throws IOException{
    File destDir = new File(destDirPath);
    if (!destDir.exists()) {
      new File(destDir.getParent()).mkdirs();
      destDir.mkdir();
    }
    ZipInputStream zipIn = new ZipInputStream(new FileInputStream(zipFile));
    ZipEntry entry = zipIn.getNextEntry();
    // iterates over entries in the zip file
    while (entry != null) {
      String filePath = destDirPath + File.separator + entry.getName();
      if (!entry.isDirectory()) {
        // if the entry is a file, extracts it
        File entryFile = new File(filePath);
        new File(entryFile.getParent()).mkdirs();
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(entryFile));
        byte[] bytesIn = new byte[4096];
        int read = 0;
        while ((read = zipIn.read(bytesIn)) != -1) {
          bos.write(bytesIn, 0, read);
        }
        bos.close();
      } else {
        // if the entry is a directory, make the directory
        File dir = new File(filePath);
        dir.mkdir();
      }
      zipIn.closeEntry();
      entry = zipIn.getNextEntry();
    }
    zipIn.close();
  }
}
