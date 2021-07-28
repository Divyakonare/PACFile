function FindProxyForURL(url, host)
{
	if (shExpMatch(host, "202.165.107.50")) {
	return "PROXY 10.168.10.182:8080";
	} else {
	return "DIRECT";
	}
}
