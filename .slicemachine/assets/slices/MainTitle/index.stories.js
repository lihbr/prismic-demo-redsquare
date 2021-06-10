import MyComponent from './../../../../slices/MainTitle';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/MainTitle'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"main_title","items":[],"primary":{"title":[{"type":"heading1","text":"Streamline innovative web services","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
