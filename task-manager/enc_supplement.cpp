#include <string>
#include <iostream>
#include <cstdlib>
#include <emscripten/emscripten.h>
extern "C" {
    EMSCRIPTEN_KEEPALIVE
    char* encrypt(const char* encrypt_input) {
        std::string encrypted = std::string("enc_") + encrypt_input;
        char *output = (char*)malloc(encrypted.size() + 1);
        std::strcpy(output, encrypted.c_str());
        return output;
    }

    EMSCRIPTEN_KEEPALIVE
    char* decrypt(const char* decrypt_input) {
        std::string str(decrypt_input);
        if (str.find("enc_") == 0) {
            std::string decrypted = str.substr(4);
            char* output = (char*)malloc(decrypted.size() + 1);
            std::strcpy(output, decrypted.c_str());
            return output;
        }
        return nullptr;
    }
}
