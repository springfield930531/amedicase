# Instrucțiuni pentru transferul zip-ului

## Comandă pentru transfer de pe Mac local pe server:

```bash
scp /Users/dorin/Documents/Amdicase/Figma\ export\ 2/amedicase-backup-20251105-203340.zip root@dev.amedicase.com:/root/amedicase/
```

SAU cu IP direct:
```bash
scp /Users/dorin/Documents/Amdicase/Figma\ export\ 2/amedicase-backup-20251105-203340.zip root@149.102.141.203:/root/amedicase/
```

## După transfer, verifică pe server:

```bash
ls -lh /root/amedicase/amedicase-backup-20251105-203340.zip
```

## Apoi extragem și actualizăm frontend-ul:

```bash
cd /root/amedicase
unzip -o amedicase-backup-20251105-203340.zip -d ./extracted_design
# Apoi actualizăm frontend-ul cu conținutul extras
```





