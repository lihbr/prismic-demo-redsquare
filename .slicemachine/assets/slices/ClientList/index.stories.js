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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"client_list","items":[],"primary":{"title":[{"type":"heading2","text":"Deliver vertical e-commerce","spans":[]}],"list":[{"type":"paragraph","text":"Labore quis laborum amet sint ullamco. Ipsum occaecat nisi veniam nostrud qui officia do eiusmod Lorem do duis laborum. Reprehenderit deserunt veniam occaecat deserunt enim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
