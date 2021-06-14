<template>
  <button
    :class="classes"
    :crop="crop"
    class="crop-button"
    type="button"
    v-on="$listeners"
  >
    <!-- <CropIcon :border="true" :crop="crop" :theme="iconTheme" />
    <AppParagraph class="crop-button__name" size="sm">
      <TextContent :content="crop" />
    </AppParagraph> -->
  </button>
</template>

<script>
// import AppParagraph from "~/components/shared/AppParagraph";
// import CropIcon from "~/components/shared/CropIcon";
// import AppParagraph from "~/components/shared/TextContent";

export default {
  components: {
    AppParagraph,
    CropIcon,
    TextContent
  },
  props: {
    crop: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean,
      requied: true
    }
  },
  computed: {
    classes() {
      return {
        "is-selected": this.isSelected
      };
    },
    iconTheme() {
      return this.isSelected ? "primary" : "white";
    }
  }
};
</script>

<style lang="scss" scoped>
.crop-button {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: spacing("xs");
  position: relative;
  text-align: center;
  width: 4rem;
}
</style>
