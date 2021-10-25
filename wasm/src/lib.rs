extern crate console_error_panic_hook;
use wasm_bindgen::prelude::*;
use imageproc::drawing::draw_text_mut;
use image::*;
use js_sys::*;
use rusttype::{Font, Scale};
// use imageproc::drawing::draw_text_mut;
// use rusttype::{Font, Scale};
#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}
macro_rules! console_log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn resize_image(arr: Uint8Array, width: usize, height:usize, fmt: &str) -> Uint8Array {
    console_error_panic_hook::set_once();
    let buffer = arr.to_vec();
    console_log!("{}", fmt);
    let mut img = load_from_memory(&buffer).expect("Error occurs at load image from buffer.");
    let font = Vec::from(include_bytes!("../assets/image/DelaGothicOne-Regular.ttf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();
    let height = 30.0;
    let scale = Scale {
        x: height,
        y: height,
    };
    let text = "すごい副業";
    draw_text_mut(&mut img, Rgba([255u8, 255u8, 255u8, 255u8]), 50, 50, scale, &font, text);
    // let resized = img.unsharpen(width as f32, height as i32);
    // let resized = resized.huerotate(height as i32);
    let result = save_to_buffer(img, fmt);

    Uint8Array::new(&unsafe { Uint8Array::view(&result)}.into())

}

// pub fn add_font_image(arr: Uint8Array, width: usize, height:usize, fmt: &str)

fn save_to_buffer(img: DynamicImage, fmt_str:&str) -> Vec<u8> {
    console_error_panic_hook::set_once();

    let fmt = match fmt_str {
        "png" => ImageOutputFormat::Png,
        "gif" => ImageOutputFormat::Gif,
        "bmp" => ImageOutputFormat::Bmp,
        "jpg" => ImageOutputFormat::Jpeg(80),
        unsupport => ImageOutputFormat::Unsupported(String::from(unsupport)),
    };

    let mut result: Vec<u8> = Vec::new();
    img.write_to(&mut result, fmt).expect("Error occurs at save image from buffer.");

    result
}
// pub fn test(a:u32) -> u32{
//     let mut image = image::open("assets/image/whilte.jpg").unwrap();
//     let font = Vec::from(include_bytes!("../assets/image/DelaGothicOne-Regular.ttf") as &[u8]);
//     let font = Font::try_from_vec(font).unwrap();

//     let height = 300.0;
//     let scale = Scale {
//         x: height,
//         y: height,
//     };

//     let text = "test";
//     draw_text_mut(&mut image, Rgba([255u8, 255u8, 255u8, 255u8]), 50, 0, scale, &font, text);
//     image.save("test.jpg").unwrap();
//     return a;

// }

// #[wasm_bindgen]
// pub fn fib(n: u32) -> u32 {
//     if n == 0 || n == 1 {
//         return n;
//     }

//     fib(n - 1) + fib(n - 2)
// }