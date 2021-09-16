<template>
  <div class="field-template">
    <div class="field">
      <div class="text-field text-field--with-description">{{description}}</div>
      <div class="ui message messages messages--help">
          {{messageHelp}}
      </div>
      <div class="field-template__children">
        <div class="kt-textfield">
          <input
            type="text"
            required=""
            :placeholder="placeholder"
            id="textfield-1j1a6f6"
            class="kt-textfield__input kt-textfield__input--empty"
            value=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        description:String,
        messageHelp:String,
        placeholder:String
    }
}
</script>