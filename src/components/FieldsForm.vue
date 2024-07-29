<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="
        block w-full 
        rounded-md border-0 py-1.5 px-2
        text-gray-900 
        shadow-sm ring-1 
        ring-inset 
        ring-gray-300 
        placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset 
        focus:ring-indigo-600 
        sm:text-sm
        h-9
        m:leading-6" />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>