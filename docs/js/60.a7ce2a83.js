(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{"475e":function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <q-media-player\n    :bottom-controls="true"\n    :sources="sources"\n    @playing="isPlaying = true"\n    @paused="isPlaying = false"\n    background-color="teal-3"\n    content-style="height: 200px;"\n    ref="qmp"\n    type="video"\n  >\n    <template v-slot:controls>\n      <div class="column text-white bg-teal q-pa-md q-mt-xs">\n        <div class="row">\n          <q-btn size="xl" class="q-ml-sm" :icon="isPlaying ? \'stop\': \'play_arrow\'" @click="$refs.qmp.togglePlay()" outline></q-btn>\n          <q-space></q-space>\n          <q-btn @click="$refs.qmp.toggleFullscreen()" flat icon="fullscreen"></q-btn>\n        </div>\n      </div>\n    </template>\n  </q-media-player>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      isPlaying: false,\n      sources: [\n        {\n          src: \'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=300\',\n          type: \'video/mp4\'\n        }\n      ]\n    }\n  }\n}\n<\/script>\n'}}]);