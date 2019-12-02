# Reselect

Simple “selector” library for Redux (and others) inspired by getters in NuclearJS, subscriptions in re-frame and this proposal from speedskater.

If the state tree is large, or the calculation expensive, repeating the calculation on every update may cause performance problems. Reselect can help to avoid these unnecessary recalculations.

- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.
