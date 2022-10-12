pub fn renderer() -> String {
    "renderer".into()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(renderer(), "renderer".to_string());
    }
}
