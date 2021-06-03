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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"display_text","items":[],"primary":{"text":[{"type":"paragraph","text":"Ullamco consequat deserunt nulla veniam enim cillum proident culpa cupidatat amet mollit eiusmod reprehenderit ea ad.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
