function time(){return(new Date()).getTime()/1000}window.Humanize={}
/*!
PHP-inspired helper functions
/**/
;function date(j,h){var g=this,i,e,b=/\\?([a-z])/gi,a,c=function(k,f){if((k=k+"").length<f){return new Array((++f)-k.length).join("0")+k}return k},d=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"];a=function(f,k){return e[f]?e[f]():k};e={d:function(){return c(e.j(),2)},D:function(){return e.l().slice(0,3)},j:function(){return i.getDate()},l:function(){return d[e.w()]+"day"},N:function(){return e.w()||7},S:function(){var f=e.j();return f>4&&f<21?"th":{1:"st",2:"nd",3:"rd"}[f%10]||"th"},w:function(){return i.getDay()},z:function(){var k=new Date(e.Y(),e.n()-1,e.j()),f=new Date(e.Y(),0,1);return Math.round((k-f)/86400000)+1},W:function(){var k=new Date(e.Y(),e.n()-1,e.j()-e.N()+3),f=new Date(k.getFullYear(),0,4);return c(1+Math.round((k-f)/86400000/7),2)},F:function(){return d[6+e.n()]},m:function(){return c(e.n(),2)},M:function(){return e.F().slice(0,3)},n:function(){return i.getMonth()+1},t:function(){return(new Date(e.Y(),e.n(),0)).getDate()},L:function(){return new Date(e.Y(),1,29).getMonth()===1|0},o:function(){var l=e.n(),f=e.W(),k=e.Y();return k+(l===12&&f<9?-1:l===1&&f>9)},Y:function(){return i.getFullYear()},y:function(){return(e.Y()+"").slice(-2)},a:function(){return i.getHours()>11?"pm":"am"},A:function(){return e.a().toUpperCase()},B:function(){var k=i.getUTCHours()*3600,f=i.getUTCMinutes()*60,l=i.getUTCSeconds();return c(Math.floor((k+f+l+3600)/86.4)%1000,3)},g:function(){return e.G()%12||12},G:function(){return i.getHours()},h:function(){return c(e.g(),2)},H:function(){return c(e.G(),2)},i:function(){return c(i.getMinutes(),2)},s:function(){return c(i.getSeconds(),2)},u:function(){return c(i.getMilliseconds()*1000,6)},I:function(){var k=new Date(e.Y(),0),m=Date.UTC(e.Y(),0),f=new Date(e.Y(),6),l=Date.UTC(e.Y(),6);return 0+((k-m)!==(f-l))},O:function(){var k=i.getTimezoneOffset(),f=Math.abs(k);return(k>0?"-":"+")+c(Math.floor(f/60)*100+f%60,4)},P:function(){var f=e.O();return(f.substr(0,3)+":"+f.substr(3,2))},Z:function(){return -i.getTimezoneOffset()*60},c:function(){return"Y-m-d\\Th:i:sP".replace(b,a)},r:function(){return"D, d M Y H:i:s O".replace(b,a)},U:function(){return i.getTime()/1000|0}};this.date=function(k,f){g=this;i=((typeof f==="undefined")?new Date():(f instanceof Date)?new Date(f):new Date(f*1000));return k.replace(b,a)};return this.date(j,h)}function number_format(f,b,m,e){var a=f,l=isNaN(b=Math.abs(b))?2:b;var k=m==undefined?",":m;var o=e==undefined?".":e,p=a<0?"-":"";var h=parseInt(a=Math.abs(+a||0).toFixed(l))+"",g=(g=h.length)>3?g%3:0;return p+(g?h.substr(0,g)+o:"")+h.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+o)+(l?k+Math.abs(a-h).toFixed(l).slice(2):"")}
/*!
apnumber
For numbers 1-9, returns the number spelled out. Otherwise, returns the number. This follows Associated Press style.

Examples:

1 becomes one.
2 becomes two.
10 becomes 10.
You can pass in either an integer or a string representation of an integer.
/**/
Humanize.apnumber=function(c){var b=["one","two","three","four","five","six","seven","eight","nine"];var a=b[parseInt(c)-1];return a!==undefined?a:c};
/*!
intcomma
Converts an integer to a string containing commas every three digits.

Examples:

4500 becomes 4,500.
45000 becomes 45,000.
450000 becomes 450,000.
4500000 becomes 4,500,000.
https://github.com/gburtini/Humanize-PHP/blob/master/Humanize.php
/**/
Humanize.intcomma=function(b,a){a=a===undefined?0:a;return number_format(b,a,".",",")};
/*!
intword
Converts a large integer to a friendly text representation. Works best for numbers over 1 million.

Examples:
1000000 becomes 1.0 million.
1200000 becomes 1.2 million.
1200000000 becomes 1.2 billion.
/**/
Humanize.intword=function(a){a=parseInt(a);if(a<1000000){return a}else{if(a<100){return Humanize.intcomma(a,1)}else{if(a<1000){return Humanize.intcomma(a/100,1)+" hundred"}else{if(a<100000){return Humanize.intcomma(a/1000,1)+" thousand"}else{if(a<1000000){return Humanize.intcomma(a/100000,1)+" hundred thousand"}else{if(a<1000000000){return Humanize.intcomma(a/1000000,1)+" million"}else{if(a<1000000000000){return Humanize.intcomma(a/1000000000,1)+" billion"}else{if(a<1000000000000000){return Humanize.intcomma(a/1000000000000,1)+" trillion"}}}}}}}}return a}
/*!
naturalDay
For dates that are the current day or within one day, return “today”, “tomorrow” or “yesterday”, as appropriate. Otherwise, format the date using the passed in format string.

Argument: Date formatting string as described in the date tag.

Examples (when ‘today’ is 17 Feb 2007):

16 Feb 2007 becomes yesterday.
17 Feb 2007 becomes today.
18 Feb 2007 becomes tomorrow.
Any other day is formatted according to given argument or the DATE_FORMAT setting if no argument is given.
/**/
;Humanize.processDate=function(a){a=a===undefined?time():a;if(parseInt(a)<10000){return Date.parse(a)/1000}return(parseInt(a))};Humanize.naturalDay=function(e,h){e=Humanize.processDate(e);var h=h===undefined?"Y-m-d":h;var g=60*60*24;var i=new Date();var b=(new Date(i.getFullYear(),i.getMonth(),i.getDate())).getTime()/1000;var a=b+g;var f=a+g;var c=b-g;if(e>=c&&e<b){return"yesterday"}else{if(e>=b&&e<a){return"today"}else{if(e>=a&&e<f){return"tomorrow"}else{return date(h,e)}}}}
/*!
naturaltime
New in Django 1.4: Please see the release notes
For datetime values, returns a string representing how many seconds, minutes or hours ago it was – falling back to a longer date format if the value is more than a day old. In case the datetime value is in the future the return value will automatically use an appropriate phrase.

Examples (when ‘now’ is 17 Feb 2007 16:30:00):

17 Feb 2007 16:30:00 becomes now.
17 Feb 2007 16:29:31 becomes 29 seconds ago.
17 Feb 2007 16:29:00 becomes a minute ago.
17 Feb 2007 16:25:35 becomes 4 minutes ago.
17 Feb 2007 15:30:29 becomes an hour ago.
17 Feb 2007 13:31:29 becomes 2 hours ago.
16 Feb 2007 13:31:29 becomes 1 day ago.
17 Feb 2007 16:30:30 becomes 29 seconds from now.
17 Feb 2007 16:31:00 becomes a minute from now.
17 Feb 2007 16:34:35 becomes 4 minutes from now.
17 Feb 2007 16:30:29 becomes an hour from now.
17 Feb 2007 18:31:29 becomes 2 hours from now.
18 Feb 2007 16:31:29 becomes 1 day from now.
/**/
;Humanize.naturalTime=function(d,g){d=Humanize.processDate(d);g=g===undefined?"g:ia":g;var a=time();var c=60*60;var f,b,e;if(Humanize.naturalDay(d,g)==="today"){var i=a-c;var h=a+c;if(d>i){
/*!
			The future
			/**/
if(d>a){f=Math.round(d-a);b=Math.round(f/60);if(b>60){e=Math.round(b/60);return"in about "+e+" hours"}else{if(!b){if(f<=10){return"just now"}else{return"in "+f+" seconds"}}else{if(b===1){return"in one minute"}else{return"in "+b+" minutes"}}}
/*!
			The past
			/**/
}f=Math.round(a-d);b=Math.round(f/60);
/*! Process minutes */
if(!b){if(f<=10){return"now"}else{return f+" seconds ago"}}else{if(b===1){return"one minute ago"}else{return""+b+" minutes ago"}}}}return date(g,d)};
/*!
ordinal
Converts an integer to its ordinal as a string.

Examples:

1 becomes 1st.
2 becomes 2nd.
3 becomes 3rd.
You can pass in either an integer or a string representation of an integer.
/**/
Humanize.ordinal=function(d){var c=parseInt(d);if(c===0){return d}var e=c%100;if(e===11||e===12||e===13){return c+"th"}var a=c%10;var b="";switch(a){case 1:b="st";break;case 2:b="nd";break;case 3:b="rd";break;default:b="th";break}return c+b};
/*!
filesizeformat
Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).

For example:

{{ value|filesizeformat }}
If value is 123456789, the output would be 117.7 MB.
/**/
Humanize.filesizeformat=function(a){if(a>=1073741824){a=number_format(a/1073741824,2,".","")+" Gb"}else{if(a>=1048576){a=number_format(a/1048576,2,".","")+" Mb"}else{if(a>=1024){a=number_format(a/1024,0)+" Kb"}else{a=number_format(a,0)+" bytes"}}}return a};
/*!
linebreaks
Replaces line breaks in plain text with appropriate HTML; a single newline becomes an HTML line break (<br />) and a new line followed by a blank line becomes a paragraph break (</p>).

For example:

{{ value|linebreaks }}
If value is Joel\nis a slug, the output will be <p>Joel<br />is a slug</p>.
/**/
Humanize.linebreaks=function(a){a=a.replace(/(\r\n|\n|\r){2}/gm,"</p><p>");a=a.replace(/(\r\n|\n|\r)/gm,"<br />");return"<p>"+a+"</p>"};
/*!
linebreaksbr
Converts all newlines in a piece of plain text to HTML line breaks (<br />).

For example:

{{ value|linebreaksbr }}
If value is Joel\nis a slug, the output will be Joel<br />is a slug.
/**/
Humanize.linebreaksbr=function(a){return a.replace(/(\r\n|\n|\r)/gm,"<br />")};
/*!
pluralize
Returns a plural suffix if the value is not 1. By default, this suffix is 's'.

Example:

You have {{ num_messages }} message{{ num_messages|pluralize }}.
If num_messages is 1, the output will be You have 1 message. If num_messages is 2 the output will be You have 2 messages.

For words that require a suffix other than 's', you can provide an alternate suffix as a parameter to the filter.

Example:

You have {{ num_walruses }} walrus{{ num_walruses|pluralize:"es" }}.
For words that don't pluralize by simple suffix, you can specify both a singular and plural suffix, separated by a comma.

Example:

You have {{ num_cherries }} cherr{{ num_cherries|pluralize:"y,ies" }}.
/**/
Humanize.pluralize=function(e,b,a){var d="",c="s";if(a!==undefined){d=b;c=a}else{if(b!==undefined){c=b}}return parseInt(e)===1?d:c};
/*!
truncatechars
New in Django 1.4: Please see the release notes
Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…").

Argument: Number of characters to truncate to

For example:

{{ value|truncatechars:9 }}
If value is "Joel is a slug", the output will be "Joel i…".
/**/
Humanize.truncatechars=function(a,b){if(a.length>b){return a.substr(0,b-3)+"…"}else{return a}};
/*!
truncatewords
Truncates a string after a certain number of words.

Argument: Number of words to truncate after

For example:

{{ value|truncatewords:2 }}
If value is "Joel is a slug", the output will be "Joel is …".

Newlines within the string will be removed.
/**/
Humanize.truncatewords=function(b,d){var e=b.split(" ");var a="";for(var c=0;c<d;c++){if(e[c]===undefined){break}a+=e[c];a+=" "}if(e.length>d){a+="…"}return a};