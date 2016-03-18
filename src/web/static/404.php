{% set body_id = 'index' %}

{% extends "layout.html" %}

{% block titlesegment %}
  {%- if lang == "ja" %}
  <title>Monacaドキュメントが見つかりません</title>
  {%- else %}
  <title>Monaca Document Not Found</title>
  {%- endif %}
{% endblock %}

{% block docstart %}
  <section class="global pb140">
  <div class="container">
    {%- if lang == "ja" %}
    <h1>404 Not Found!<br />ドキュメントが見つかりません</h1>
    {%- else %}
      <h1>404 Not Found!</h1>
    {%- endif %}
    <p style="text-align: center;">
      {%- if lang == "ja" %}
      指定したURLはサーバー上に見つかりませんでした。<br>
      コンテンツが移動された可能性があります。下記のコンテンツから参照してください。
      {%- else %}
      Sorry, specified page is not available on our server.<br>
      It is likely that the page has been moved. Please navigate from following contents. 
      {%- endif %}
    </p>

      <ul class="box404">
        <li class="mr10">
          <a class="textheight" href="/quickstart/"><img src="/_static/img/404/img01.png" alt=""></a>
          <p><a href="/quickstart/">{%- if lang == "ja" %}クイックスタート{%- else %}Quick Start{%- endif %}</a></p>
        </li>
        <li class="center">
          <a class="textheight" href="/sampleapp/"><img src="/_static/img/404/img02.png" alt=""></a>
          <p><a href="/sampleapp/">{%- if lang == "ja" %}チュートリアル/サンプル{%- else %}Tutorial / Samples{%- endif %}</a></p>
        </li>
        <li class="ml10">
          <a class="textheight" href="/reference/"><img src="/_static/img/404/img03.png" alt=""></a>
          <p><a href="/reference/">{%- if lang == "ja" %}開発リファレンス{%- else %}Reference{%- endif %}</a></p>
        </li>
        <li class="mt mr10">
          <a class="textheight" href="/manual/"><img src="/_static/img/404/img04.png" alt=""></a>
          <p><a href="/manual/">{%- if lang == "ja" %}マニュアル{%- else %}Manual{%- endif %}</a></p>
        </li>
        <li class="center">
          <a class="textheight" href="/faq/"><img src="/_static/img/404/img05.png" alt=""></a>
          <p><a href="/faq/">{%- if lang == "ja" %}FAQ{%- else %}FAQ{%- endif %}</a></p>
        </li>
      </ul>
    </div>
  </section>
{% endblock %}
