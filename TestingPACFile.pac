function FindProxyForURL(url, host)
{
  if (isInNet(host, "13.251.106.90", "255.255.255.255") {
      return "PROXY 192.168.225.201:8080";
  } else {
      return "DIRECT";
}
