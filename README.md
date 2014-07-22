SilverStripe-Admin-Toolbar
==========================
<p>SilverStripe Admin Toolbar is a simple tool, with which a developer can easily reach the URL variable tools at the click of a mouse while working on a project. Every SilverStripe-developer probably knows the URL variable tools, like: dev/build/, ?flush=1 or ?showqueries=1. Entering the parameters into the URL or the switching between admin and frontend is quite cumbersome. Furthermore, this tool allows you to search several search engines and platforms and on the basis of Quicklinks you can access the most important SilverStripes‘ platforms (api, docs and forums).</p>

<h2>Features:</h2>
<ul>
<li>Switching between frontend and backend</li>
<li>Developer tools: build, flush, show queries and show template and debug</li>
<li>Quicklinks: SilverStripe-API, -Docs, -Forums and Add-ons</li>
<li>Search-Form for SilverStripe Sites, Google, GitHub and Stackoverflow</li>
<li>SilverStripe AdmingToolbar is scaleable, that means that you can adjust every developers‘ tool, quicklink and search engine in the Admin toolbar.</li>
</ul>

<h2>Requirements:</h2>
<ul>
<li>SilverStripe 3.+</li>
<li>jQuery</li>
</ul>

<h2>Installation:</h2>
<ul>
<li>Download the SilverStripe Admin Toolbar and unzip it in SilverStripe root- directory.</li>
<li>Rename the SilverStripe Admin Toolbar- directory in admintoolbar.</li>
<li>Insert following lines into the file mysite/_config.php<br/>
    Director::set_environment_type('dev');
    AdminToolbar::Initial();</li>
<li>Lastly call the URL dev/build/?flush=1</li>
</ul>

<h2>Discuss:</h2>
http://www.php-programmierer.at/en/silverstripe/silverstripe-admin-toolbar-2
