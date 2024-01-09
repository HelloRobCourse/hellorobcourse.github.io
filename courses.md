---
layout: simple
---

# HelloRob Course Offerings

{% assign current_courses = site.courses | where: 'active', true %}
{% assign past_courses = site.courses | where: 'active', false %}

## Current Course Offerings

<ul>
  {% for course in current_courses %}
    <li>{{ course }}</li>
  {% endfor %}
</ul>

## Past Course Offerings

<ul>
  {% for course in past_courses %}
    <li>{{ course }}</li>
  {% endfor %}
</ul>
