---
layout     : base
title      : "Hanuman Offroad Challenge 2024"
banner     : "assets/img/banner-Mar-10-2024.jpg"
form_title : Online Registration Form
location   : "Location: Phnum Basseth, Kingdom of Cambodia"
date       : "Enduro Race March 9, 2024"

# form_closed: Online Registration is Closed
# on_site_reg: Please register at the race site
---

{% include hero.html %}
{% include countdown.html %}
{% include title.html %}

{% if page.form_closed %}
  {% include cc.html %}
{% else %}
  {% include tabs-forms.html %}
  {% include fees.html %}
  {% include waiver.html %}
  {% include payment.html %}
{% endif %}


{% include footer.html %}
