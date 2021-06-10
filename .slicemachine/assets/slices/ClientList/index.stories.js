import MyComponent from './../../../../slices/ClientList';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ClientList'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"client_list","items":[],"primary":{

        "title":[{"type":"heading2","text":"Visualize transparent mindshare","spans":[]}],

        "list":

        [
          {
          "type": "list-item",
          "text": "My first elemetn",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
          {
          "type": "list-item",
          "text": "My second element",
          "spans": [ ]
          },
        ]


    },"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
