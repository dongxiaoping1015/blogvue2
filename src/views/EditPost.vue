<template>
    <div >
        <div class="row">
            <div class="col-md-6">
                <textarea class="form-control" rows="30" v-model="mdContent"></textarea>
            </div>
            <div class="col-md-6">
                <div id="showText">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import showdown from 'showdown'
import $ from 'jquery'

export default {
    name: "post",
    data() {
        return {
            mdContent: "",
            textContext: ""
        }
    },
    methods: {
        mdSwitch() {
            var converter = new showdown.Converter();
            this.textContext = converter.makeHtml(this.mdContent);
            $("#showText").html(this.textContext);
        }
    },
    watch: {
        mdContent: function () {
            var converter = new showdown.Converter();
            this.textContext = converter.makeHtml(this.mdContent);
            $("#showText").html(this.textContext);
        }
    }
}
</script>