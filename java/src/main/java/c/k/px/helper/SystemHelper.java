package c.k.px.helper;

public class SystemHelper {

  public enum OS {
    WINDOWS("Windows"),
    LINUX("Linux"),
    MAC("Darwin");

    private final String name;

    OS(String name) {
      this.name = name;
    }

    public String getName() {
      return name;
    }
  };

  public static OS getOS() {
    String operSys = System.getProperty("os.name").toLowerCase();
    OS os = null;
    if (operSys.contains("win")) {
      os = OS.WINDOWS;
    } else if (operSys.contains("nix") || operSys.contains("nux")
        || operSys.contains("aix")) {
      os = OS.LINUX;
    } else if (operSys.contains("mac")) {
      os = OS.MAC;
    } else {
      throw new RuntimeException("Unsupported OS: " + operSys);
    }
    return os;
  }

}
