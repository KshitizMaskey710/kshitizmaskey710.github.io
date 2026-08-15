---
layout: page
title: Reflections, delivery lessons, and practical enablement case studies.
seo_title: Blogs & Articles | Kshitiz Maskey
eyebrow: Blogs & Case Studies
description: A collection of writing on customer-facing delivery, program execution, governance, Agile thinking, team leadership, and practical training experiences.
image: /assets/images/kshitiz-portrait.png
permalink: /blogs/
nav: Blogs
---

<section class="section no-border">
  <div class="container">
    <div class="grid-2">
      {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
      {% for post in sorted_posts %}
      <a class="blog-card" href="{{ post.url | relative_url }}">
        <p class="label">{{ post.category_label }}</p>
        <h2>{{ post.card_title | default: post.title }}</h2>
        <p class="body">{{ post.card_text | default: post.description }}</p>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
