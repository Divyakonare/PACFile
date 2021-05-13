function FindProxyForURL(url, host)
{
	if (localHostOrDomainIs(host, "www.ivanti.com")) {
		return "PROXY 192.168.225.52:8080";
	} else {
		return "DIRECT";
	}
}
