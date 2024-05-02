function FindProxyForURL(url, host)
{
	if (shExpMatch(host, "202.165.107.50")) {
	return "PROXY 192.168.1.3:8080";
	} else {
	return "DIRECT";
	}
}
