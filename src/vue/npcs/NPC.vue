<template>
    <div>
         <md-speed-dial md-direction="bottom">
            <md-speed-dial-target class="md-primary">
                <md-icon>more_vert</md-icon>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <md-button class="md-icon-button">
                    <md-icon>add</md-icon>
                    <md-tooltip md-direction="right">New</md-tooltip>
                </md-button>

                <md-button class="md-icon-button" :click="uploadFile()">
                    <md-icon>cloud_upload</md-icon>
                    <md-tooltip md-direction="right">Upload</md-tooltip>
                    <input ref="fileInput" type="file" accept="*.json" style="display: none" :onchange="loadFile(this)" />
                </md-button>

                <md-button class="md-icon-button">
                    <md-icon>cloud_download</md-icon>
                    <md-tooltip md-direction="right">Download</md-tooltip>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        components: { }
    })
    export default class NPC extends Vue {
        loadFile(files:any[]) {
            console.log(files);
        };

        uploadFile() {
            console.log(this.$refs.fileInput);
            (this.$refs.fileInput as any).click();
        }
    }
</script>