function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "142.250.184.128"))
  {
	  return "PROXY 192.168.225.52:8080";
  } 
  else
  {
	  return "DIRECT";
  }
}
