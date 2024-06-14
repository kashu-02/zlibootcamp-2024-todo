let pkgs = import <nixpkgs> {};

in pkgs.mkShell rec {
  name = "devenv";

  buildInputs = with pkgs; [
    nodejs_20
  ];
}

