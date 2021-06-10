import MyComponent from './../../../../slices/ExampleSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ExampleSlice'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"example_slice","items":[],"primary":{"title":[{"type":"heading1","text":"Synthesize open-source bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Non deserunt quis dolor ad ut elit commodo consectetur aliquip proident anim.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
