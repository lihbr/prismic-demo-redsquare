import MyComponent from './../../../../slices/DisplayText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/DisplayText'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"display_text","items":[],"primary":{"text":[{"type":"paragraph","text":"Voluptate reprehenderit duis sit officia aliquip duis eiusmod adipisicing non.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
