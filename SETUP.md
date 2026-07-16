# Hướng dẫn Setup WordPress Studio

## 1. Upload & giải nén

```bash
# Di chuyển file .zip vào thư mục riêng (tránh lẫn với source code)
mv /workspaces/git-practice/studio-cli-linux.zip /tmp/

# Giải nén .zip
cd /tmp
unzip studio-cli-linux.zip -d studio

# Giải nén lớp .tar.gz bên trong
cd /tmp/studio
tar xzf studio-cli-linux.tar.gz
rm -f ../studio-cli-linux.zip studio-cli-linux.tar.gz
```

Kết quả: toàn bộ file trong `/tmp/studio/`.

## 2. Chạy server UI

```bash
cd /tmp/studio
node --experimental-wasm-jspi main.mjs ui
```

Server chạy tại `http://localhost:8081`. Nhấn **Ctrl+C** để dừng.

## 3. Đăng nhập (auth)

Mở terminal **riêng** (giữ nguyên server UI chạy), sau đó:

```bash
cd /tmp/studio
node main.mjs auth login
```

Khi chạy, terminal sẽ hiện link/kích hoạt để bạn paste token vào.
