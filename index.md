---
layout     : base
title      : "Team Challenge Friendship Race"
banner     : "assets/img/banner.jpg"
form_title : Online Registration Form
location   : "Location: To Be Announced"
#date       : "Enduro Race March 9, 2024"

form_closed: Online Registration is Closed
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
