(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{"941b":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <q-media-player\n    type=\"video\"\n    :sources=\"sources\"\n    :tracks=\"tracks\"\n    track-language=\"French\"\n  />\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sources: [\n        {\n          src: 'http://ftp.nluug.nl/pub/graphics/blender/demo/movies/ToS/tears_of_steel_720p.mov',\n          type: 'video/mp4'\n        }\n      ],\n      tracks: [\n        {\n          src: 'media/TearsOfSteel/TOS-en.vtt',\n          kind: 'subtitles',\n          srclang: 'en',\n          label: 'English'\n        },\n        {\n          src: 'media/TearsOfSteel/TOS-de.vtt',\n          kind: 'subtitles',\n          srclang: 'de',\n          label: 'German'\n        },\n        {\n          src: 'media/TearsOfSteel/TOS-es.vtt',\n          kind: 'subtitles',\n          srclang: 'es',\n          label: 'Spanish'\n        },\n        {\n          src: 'media/TearsOfSteel/TOS-fr-Goofy.vtt',\n          kind: 'subtitles',\n          srclang: 'fr',\n          label: 'French'\n        },\n        {\n          src: 'media/TearsOfSteel/TOS-it.vtt',\n          kind: 'subtitles',\n          srclang: 'it',\n          label: 'Italian'\n        },\n        {\n          src: 'media/TearsOfSteel/TOS-nl.vtt',\n          kind: 'subtitles',\n          srclang: 'nl',\n          label: 'Dutch'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n"}}]);