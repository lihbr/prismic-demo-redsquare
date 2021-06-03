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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"client_list","items":[],"primary":{"title":[{"type":"heading2","text":"Visualize transparent mindshare","spans":[]}],"list":[{"type":"paragraph","text":"Qui deserunt consectetur elit laboris mollit esse ut ex Lorem aliqua ipsum adipisicing duis. Dolore ipsum consequat cillum velit adipisicing in.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
