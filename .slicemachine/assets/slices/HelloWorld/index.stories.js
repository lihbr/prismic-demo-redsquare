import MyComponent from './../../../../slices/HelloWorld';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HelloWorld'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hello_world","items":[],"primary":{"title":[{"type":"heading1","text":"Benchmark wireless partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Amet eiusmod nostrud commodo Lorem fugiat laborum esse eiusmod do ad nostrud occaecat mollit et. Incididunt aliqua et magna minim nisi non est. Elit mollit do cillum Lorem quis nisi dolore magna et qui occaecat sint ea.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'

export const _JohnDoe = () => ({
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
      mock: {"variation":"johnDoe","name":"JohnDoe","slice_type":"hello_world","items":[],"primary":{"title":[{"type":"heading1","text":"Revolutionize next-generation convergence","spans":[]}],"description":[{"type":"paragraph","text":"Id labore elit sunt duis ex cillum ad velit amet excepteur aute exercitation sit fugiat cupidatat. Labore est est qui laboris. Anim velit pariatur sunt irure adipisicing Lorem labore.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"}},"id":"_JohnDoe"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_JohnDoe.storyName = 'JohnDoe'