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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"display_text","items":[],"primary":{"text":[{"type":"heading2","text":"Implement interactive portals","spans":[]},{"type":"paragraph","text":"Sint enim id eiusmod quis dolore est minim. Labore irure ex veniam ex nisi quis deserunt magna reprehenderit et incididunt. Ut nostrud minim laborum qui aliquip eiusmod sunt aliquip in.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
