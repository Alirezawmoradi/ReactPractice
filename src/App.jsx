import Jsx from "./concepts/jsx/jsx.jsx";
import ReactList from "./concepts/react-list/react-list.jsx";
import HandlerFunction from "./concepts/handler-function/handler-function.jsx";
import Props from "./concepts/props/props.jsx";
import State from "./concepts/states/state.jsx";
import CallbackHandler from "./concepts/callback-handler/callback-handler.jsx";
import LiftingState from "./concepts/lifting-state/lifting-state.jsx";
import ControlledComponent from "./concepts/controlled-component/controlled-component.jsx";
import PropsHandling from "./concepts/props-handling/props-destructuring/props-handling.jsx";
import SideEffects from "./concepts/side-effects/side-effects.jsx";
import ColorExample from "./concepts/custom-hook/custom-hook.jsx";
import CustomHook from "./concepts/custom-hook/custom-hook.jsx";
import InlineHandler from "./concepts/inline-handler/inline-handler.jsx";

function App() {

    return (
        <div>
            <h1>React Practice from beginner to advance</h1>
            <Jsx/>
            <ReactList/>
            <HandlerFunction/>
            <Props/>
            <State/>
            <CallbackHandler/>
            <LiftingState/>
            <ControlledComponent/>
            <PropsHandling/>
            <SideEffects/>
            <CustomHook/>
            <InlineHandler/>
        </div>
    )
}

export default App
