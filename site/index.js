const js = import("@konojunya/rust-wasm-sample/rust_wasm_sample");
js.then(js => {
  js.greet("WebAssembly");
});
