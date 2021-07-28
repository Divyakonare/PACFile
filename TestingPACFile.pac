function FindProxyForURL(url, host)
{
	if (shExpMatch(host, "142.250.183.132")) {
	return "PROXY 10.168.10.182:8080";
	} else {
	return "DIRECT";
	}
}
