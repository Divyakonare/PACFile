function FindProxyForURL(url, host)
{
	if (shExpMatch(host, "10.209.116.143")) {
	return "PROXY 10.168.10.182:8080";
	} else {
	return "DIRECT";
	}
}
