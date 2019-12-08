# docker-cidr-tools

A tool to merge CIDRs for both IPv4 and IPv6. A substitution for [CIDRMerge](http://cidrmerge.sourceforge.net/)

## Dependencies

You need `docker` or `nodejs`, `npm` and [`cidr-tools`](https://github.com/silverwind/cidr-tools) to run this.

Run
```
docker pull yangzhaofengsteven/cidr-merge
```
or
```
npm install cidr-tools
```

## Usage

The program reads data from `stdin`

The data is like
```
1.0.0.0/24
1.0.0.0/24
1.0.1.0/24
2001:db8::/48
2001:db8:1::/48
```

Run
```
cat test.txt | docker run -i --rm yangzhaofengsteven/cidr-merge
```
with docker, or
```
cat test.txt | node main.js
```
directly with nodejs.

The result is
```
1.0.0.0/23
2001:db8::/47
```
