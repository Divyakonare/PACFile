function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "142.250.183.132"))
  {
	  return "DIRECT";
  } 
  else
  {
	  return "PROXY 192.168.225.52:8080";
  }
}
