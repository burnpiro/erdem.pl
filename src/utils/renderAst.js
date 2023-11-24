import rehypeReact from "rehype-react";
import React from "react";
import XAIInfidelity from "../components/Diagrams/XAIInfidelity";
import RNNProcess from "../components/Diagrams/RNNProcess/RNNProcess";
import RNNWithAttention from "../components/Diagrams/RNNWithAttention/RNNWithAttention";
import ImageWithAttention from "../components/Diagrams/ImageWithAttention/ImageWithAttention";
import InputPositionEmbeddingSin from "../components/Diagrams/InputPositionEmbeddingSin/InputPositionEmbeddingSin";
import AttentionLayer from "../components/Diagrams/AttentionLayer/AttentionLayer";
import DiffusionDiagrams from "../components/Diagrams/DiffusionDiagrams/DiffusionDiagrams";
import ResumeButton from "../components/ResumeButton";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        'xai-infidelity': XAIInfidelity,
        'rnn-process': RNNProcess,
        'rnn-with-attention': RNNWithAttention,
        'image-with-attention': ImageWithAttention,
        'sin-position-embedding': InputPositionEmbeddingSin,
        'attention-layer': AttentionLayer,
        'diffusion-diagram': DiffusionDiagrams,
        'resume-button': ResumeButton,
    },
}).Compiler;

export default renderAst;