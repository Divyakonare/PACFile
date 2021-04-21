function FindProxyForURL(url, host)
{
  if (shExpMatch(host, "142.250.183.132"))
  {
	  return "PROXY 192.168.1.5:8080";
  } 
  else
  {
	  return "DIRECT";
  }
}
